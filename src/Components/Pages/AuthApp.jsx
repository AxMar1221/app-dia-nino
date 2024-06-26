import { Button, Card, CardContent, FormControl, Grid, Input, MenuItem, Select, Typography } from "@mui/material"
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Firebase/Firebase";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { fetchData, processGameData } from "./data";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const AuthApp = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [groupsData, setGroupsData] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [jsonData, setJasonData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [pointsToAdd, setPointsToAdd] = useState(1);

    useEffect(() => {
        if (!dataLoaded) {
            const fetchDataFirebase = async () => {
                try {
                    const data = await fetchData();
                    if (data) {
                        setJasonData(data);
                        const getData = processGameData(data);
                        setGroupsData(getData);
                        setDataLoaded(true);
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            fetchDataFirebase();
        }
    }, [dataLoaded]);

    const handlePoint = () => {
        if (!jsonData) {
            Swal.fire({
                icon: 'error',
                text: 'Los datos aun no se han cargado',
                timer: 4000
            });
            return;
        }

        if (!selectedGroup || !selectedGame) {
            Swal.fire({
                icon: 'warning',
                text: 'Selecciona un grupo y una actividad',
                timer: 4000
            });
            return
        }

        const selectedGroupData = jsonData.grupo[selectedGroup];
        if (!selectedGroupData) {
            Swal.fire({
                icon: 'error',
                text: 'No se encontraron datos para el grupo seleccionado',
                timer: 4000
            });
            return;
        }

        const selectedActivityPoints = selectedGroupData[selectedGame];
        if (selectedActivityPoints === undefined) {
            Swal.fire({
                icon: 'error',
                text: 'No se encontraron datos para la actividad seleccionada',
                timer: 400
            });
            return;
        }

        const updatePoints = selectedActivityPoints + pointsToAdd;
        const updateData = { ...jsonData };
        updateData.grupo[selectedGroup][selectedGame] = updatePoints;
        setJasonData(updateData);
        // console.log(updateData, selectedGroup, selectedGame, updatePoints);

        const db = getDatabase();
        const groupRef = ref(db, `Juegos/grupo/${selectedGroup}/${selectedGame}`);
        set(groupRef, updatePoints)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: `Puntos agregados exitosamente a: ${selectedGroup}`,
                    text: `En la actividad: ${selectedGame}.`,
                    showCancelButton: true,
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Cancelar',
                    timer: 5000
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal!',
                    text: `Mensaje ${error}`,
                    showCloseButton: true,
                    timer: 5000
                });
            })
    }

    const handleAddPoint = () => {
        if (pointsToAdd < 10) {
            setPointsToAdd(pointsToAdd + 1);
        }
    }

    const handleRestPoint = () => {
        if (pointsToAdd > 1) {
            setPointsToAdd(pointsToAdd - 1);
        }
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login', {
                replace: true
            });
        }).catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal...',
                text: `${errorMessage}`
            })
        });
    }

    return (
        <div className='container mt-5'>
            <Typography align='center' variant='h4' color='error' sx={{ mb: 2 }}>
                Sumar puntos
            </Typography>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth color='error'>
                                <Typography sx={{ ml: 1, mb: 1 }} color='error'>Grupo</Typography>
                                <Select
                                    value={selectedGroup}
                                    onChange={(e) => setSelectedGroup(e.target.value)}
                                    fullWidth
                                    color='error'
                                >
                                    {groupsData.map((group) => (
                                        <MenuItem key={group.grupo} value={group.grupo}>{group.grupo}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth color='error'>
                                <Typography sx={{ ml: 1, mb: 1 }} color='error'>Actividad</Typography>
                                <Select
                                    value={selectedGame}
                                    onChange={(e) => setSelectedGame(e.target.value)}
                                    fullWidth
                                >
                                    {selectedGroup &&
                                        groupsData.length > 0 &&
                                        groupsData.map((group) => {
                                            if (group.grupo === selectedGroup) {
                                                return Object.keys(group.games).map((game) => (
                                                    <MenuItem key={game} value={game}>{game}</MenuItem>
                                                ));
                                            }
                                            return null;
                                        })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                                <RemoveCircleIcon 
                                    fontSize='large'
                                    color='error'
                                    onClick={handleRestPoint}
                                />

                            <Button
                                size='small'
                                variant='outlined'
                                color='primary'
                                onClick={handlePoint}
                            >
                                <Typography sx={{ ml: 1 }} color='error'>Sumar puntos: {pointsToAdd}</Typography>
                            </Button>
                                <AddCircleIcon 
                                    fontSize='large'
                                    color='error' 
                                    onClick={handleAddPoint}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='outlined'
                                color='primary'
                                onClick={handleLogout}
                            >
                                <Typography sx={{ ml: 1 }} color='error'>Cerrar sesión</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
