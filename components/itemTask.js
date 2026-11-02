import { Pressable, StyleSheet, Text } from "react-native";

export default function ItemTask({task, changeStyle, deleteTask}) {
   
  return (
    <Pressable onPress={() => changeStyle(task.id)} onLongPress={() => deleteTask (task.id)} style={task.done ? styles.itemContainerTrue : styles.itemContainer}>
        <Text style={styles.taskText}>
            {task.title}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ff0505",
        margin: 5,
    },
    itemContainerTrue: {
        backgroundColor: "#00ff00",
    },
    taskText: {color: "#ffffff", fontSize: 16, padding: 5, fontWeight: "bold"}


    });