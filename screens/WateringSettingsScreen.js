import React, {
    useEffect,
    useState
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import { FontSize, Color, FontFamily } from "../GlobalStyles";

import SettingSlider from '../components/SettingSlider';
import BackButton
    from "../components/BackButton";
import {
    fetchWithToken
} from "../services/fetchService";
import {
    useNavigation
} from "@react-navigation/native";
import {API_URL} from "@env"


const WateringSettingsScreen = ({route}) => {
    const navigation = useNavigation();
    const {idValve} = route.params;
    // Valeurs par défaut pour chaque slider
    const [settings, setSettings] = useState({
        wateringRate: 0,
        duration: 0,
        moistureThreshold: 0,
        rainThreshold: 0,
    });

    // Fonction pour enregistrer les nouvelles valeurs
    const saveSettings = () => {
        // console.log('Settings saved', settings);
        // fonction pour envoyer les nouvelles valeurs au serveur
        updateData();
    };

    const updateData = async () => {
        try {
           await fetchWithToken(`${API_URL}/electrovalve/${idValve}/valveSettings`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(settings)
            });
        }
        catch (error) {
            console.log('Erreur de réseau:', error.message);
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetchWithToken(`${API_URL}/electrovalve/${idValve}/valveSettings`, {
                method: 'GET',
            });

            if (response.ok) {
                const responseData = await response.json();
                setSettings(responseData[0]);
            } else {
                console.log('Erreur lors de la requête');
            }
        } catch (error) {
            console.log('Erreur de réseau:', error.message);
            // erreur pas de setting existant 
            
        }
    };

    useEffect(() => {
        fetchData();
    }, 
    // [fetchWithToken]
    [idValve]
    );


    return (

        <View>
            <BackButton screenTitle={"Paramètres"}/>
            <View style={styles.mainContainer}>

                <SettingSlider
                    name="Durée d'arrosage"
                    value={settings.duration}
                    unit="min"
                    setValue={(newValue) =>
                        setSettings({...settings, duration: newValue})
                    }
                />

                <SettingSlider
                    name="Seuil d'humidité"
                    value={settings.moistureThreshold}
                    unit="%"
                    setValue={(newValue) =>
                        setSettings({...settings, moistureThreshold: newValue})
                    }
                />

                <SettingSlider
                    name="Probabilité de pluie"
                    value={settings.rainThreshold}
                    unit="%"
                    setValue={(newValue) =>
                        setSettings({...settings, rainThreshold: newValue})
                    }
                />

                <Pressable style={[styles.button, styles.buttonContainer]} onPress={() => {navigation.goBack() , saveSettings()}} >
                    <Text style={styles.buttonText}>Enregistrer</Text>
                </Pressable>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 60,
        paddingHorizontal: '10%',
        // alignContent: 'center',
        // width : '100%',
        // alignItems:'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#BCC604',
        height: 50,
        width: 200,
        textAlign: 'center',
        paddingTop: 12,
        borderRadius: 10,
fontFamily: FontFamily.poppinsMedium
    },
    buttonContainer: {
        alignSelf: 'center',
        marginTop: 50
    },
});

export default WateringSettingsScreen;
