import * as React
    from "react";
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from "react-native";
import {
    LinearGradient
} from "expo-linear-gradient";
import {
    useNavigation
} from "@react-navigation/native";
import {
    useState
} from "react";
import BackButton
    from "../components/BackButton";
import {
    Color,
    FontFamily,
    FontSize
} from "../GlobalStyles";
import Schedule
    from "../components/Schedule";
import Icon
    from "react-native-vector-icons/FontAwesome";
import ScheduleModal
    from "../components/ScheduleModal";

const SchedulesSettingsScreen = () => {

    const navigation = useNavigation();
    const daysAbbreviation = ["L", "M", "M", "J", "V", "S", "D"];
    const [schedules, setSchedules] = useState({
        1: {
            id: 1,
            valveId: 1,
            days: [1, 3, 5],
            hourStart: 8,
            hourEnd: 10,
            idSettings: 1,
        },
        2: {
            id: 2,
            valveId: 3,
            days: [2, 4, 6],
            hourStart: 9,
            hourEnd: 11,
            idSettings: 2,
        },
    });

    // Fonction pour obtenir l'abréviation du jour en fonction de l'index
    const getDayAbbreviation = (dayIndex) => {
        return daysAbbreviation[dayIndex];
    };

    // Fonction pour vérifier si un jour est présent dans le tableau days
    const isDayPresent = (dayIndex, days) => {
        return days.includes(dayIndex);
    };

    const handleDayPress = (dayIndex, schedule) => {
        // Vérifier si le jour est déjà présent dans la liste des jours
        const isPresent = schedule.days.includes(dayIndex);

        // Copier la liste des jours actuelle
        const updatedDays = [...schedule.days];

        if (isPresent) {
            // Le jour est présent, le supprimer de la liste
            const index = updatedDays.indexOf(dayIndex);
            updatedDays.splice(index, 1);
        } else {
            // Le jour n'est pas présent, l'ajouter à la liste
            updatedDays.push(dayIndex);
        }

        // Mettre à jour les jours dans l'état
        setSchedules((prevSchedules) => ({
            ...prevSchedules,
            [schedule.id]: {
                ...schedule,
                days: updatedDays,
            },
        }));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSchedule, setNewSchedule] = useState({});

    const handleAddSchedule = () => {
        setIsModalOpen(true);
    };

    const handleSaveSchedule = () => {
        // Here you can add your code to save the new schedule
        setIsModalOpen(false);
    };

    const handleInputChange = (name, value) => {
        setNewSchedule({ ...newSchedule, [name]: value });
    };

    const updateStartHour = (hour, schedule) => {
        const updatedSchedule = { ...schedule, hourStart: hour };
        setSchedules((prevSchedules) => ({
            ...prevSchedules,
            [schedule.id]: updatedSchedule,
        }));
    };

    const updateEndHour = (hour, schedule) => {
        const updatedSchedule = { ...schedule, hourEnd: hour };
        setSchedules((prevSchedules) => ({
            ...prevSchedules,
            [schedule.id]: updatedSchedule,
        }));
    };


    return (
        <LinearGradient
            colors={['#EEF0F5', '#E2E4EA']}
            style={{height: '100%'}}>
            <View
                style={styles.titleContainer}>
                <BackButton
                    screenTitle={"Planification"}/>
            </View>
            <View>
                {Object.values(schedules).map((schedule) => (
                    <Schedule
                        key={schedule.id}
                        schedule={schedule}
                        updateStartHour={updateStartHour}
                        updateEndHour={updateEndHour}
                        handleDayPress={handleDayPress}
                        isDayPresent={isDayPresent}
                        daysAbbreviation={daysAbbreviation}
                    />

                ))}
                <View style={styles.addSchedule}>
                    <Pressable onPress={handleAddSchedule}>
                       <Text style={{paddingTop:5, color: Color.darkGrey}}>
                           +
                       </Text>
                    </Pressable>
                </View>
                <ScheduleModal
                    isModalOpen={isModalOpen}
                    isVisible={isModalOpen}
                    handleSave={handleSaveSchedule}
                    handleInputChange={handleInputChange}
                    newSchedule={newSchedule}
                />

            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 80,
    },
    addSchedule: {
        width: 100,
        height: 30,
        marginTop: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Color.lightsteelblue,
        fontFamily: FontFamily.poppinsMedium,
        alignItems: 'center',
        alignSelf: 'center',
    }
});

export default SchedulesSettingsScreen;

