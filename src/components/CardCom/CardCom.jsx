
import React, { useEffect, useState } from 'react'
import {   Avatar, Button, Card, Text } from 'react-native-paper';
import { ActivityIndicator  } from 'react-native';

import axios from 'axios';
import { FlatList, View } from 'react-native';
import instance from '../../services/AxiosOrder/Instance';


export default function CardCom() {

    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)

    useEffect(() => {

     //   setTimeout(() => {
            getData();
       //   }, 3000);
        

    }, [])



    const getData = () => {

        instance.get('/albums/1/photos')
            .then(function (response) {
                // handle success

                const array = [];
                response.data.forEach(element => {
                    array.push({
                        id: element.id,
                        title: element.title,
                        url: element.url,
                        thumbnailUrl: element.thumbnailUrl,
                    })

                });

                setdata(array)

                console.log(response.data);

                setisloading(false);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setisloading(true);
            })

    }

    const Card1 = ({ id, title, url, thumbnailUrl }) => (
        <Card style={{ margin: 10, }}>
            <Avatar.Image size={70} source={{ uri: thumbnailUrl }} style={{ margin: 10, }} />
            <Card.Content >
                <Text variant="titleLarge">{title}</Text>
                <Text variant="bodyMedium">{id}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: url }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>

    )



    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                isloading ? 
                (
                    <ActivityIndicator size="large" />
                ) :
                    (
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <Card1
                                id={item.id}
                                url={item.url}
                                title={item.title}
                                thumbnailUrl={item.thumbnailUrl}

                            />
                            }
                            keyExtractor={item => item.id}
                        />
                    )
            }

        </View>





    );
};