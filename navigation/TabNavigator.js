import {CreateBottomNavigator} from "react-navigation/bottom-tabs.";
import CreatePost from "../screens/CreatePost";
import Feed from "../screens/Feed";

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({ route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if(route.name === 'CreatePost'){
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name = {iconName} size={size} color={color} />
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
        <Tab.Screen name="feed" component={Feed} />
        <Tab.Screen name="CriarPost" component={CreatePost} />
        </Tab.Navigator>
    )
}