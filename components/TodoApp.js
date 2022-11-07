import { View,Text,TextInput,Button,StyleSheet, FlatList } from "react-native";
import { myTodos } from "../data-sources/mytodos";

export function TodoApp(){
    function TodoTemplate (title,todotype,frequency){
        let boColor;
        let baColor;

        if(todotype == 'Reminder'){
            boColor = 'orange';
            baColor= 'oldlace'
        }else if(todotype == 'Goal'){
            boColor = 'aqua';
            baColor = 'skyblue'
        }else if(todotype == 'Event'){
            boColor = 'magenta';
            baColor = 'pink'
        }

        return (
            <View style={[styles.todo, {borderColor: 'orange', backgroundColor: 'oldlace'}]}>
                <Text style={styles.todoTitle}>{title}</Text>
                <View style={styles.options}>
                    <Text style={styles.optionInfo}>{todotype}</Text>
                    <Text style={styles.optionInfo}>{frequency}</Text>

                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>My Todos</Text>

            <View style={styles.todosBlock}>
                <FlatList
                data={myTodos}
                renderItem={({item}) => TodoTemplate(item.title,item.type,item.freq)}
                key={({item}) => item.id}/>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
  },

  title:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
  },

  todosBlock:{
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'skyblue',
    marginTop: 10,
  },

  todo:{
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
  },

  options:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  optionInfo:{
    fontSize: 12,
    color: 'grey',
  }
})