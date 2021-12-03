import React from 'react'
import { View, Text} from 'react-native'


export default function Contacts({navigation}){
    return(
        <View style={{marginTop: 60, marginLeft:20}}>
            <View>
                <Text>Nome: Mariana</Text>
                <Text>Telefone: (48) 99999-9999</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                  nome: 'Mariana',
                  telefone: '(48) 99999-9999' ,
                  endereco: 'Endereço fake',
                  profissao: 'Estudante',
                })}
                >Information...</Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Nome: Julia</Text>
                <Text>Telefone: (48) 00000-0000</Text>
                <Text
                onPress={() => navigation.navigate('Information', {
                    nome: 'Julia',
                  telefone: '(48) 00000-0000' ,
                  endereco: 'endereço fake2',
                  profissao: 'professora'
                })}
                >Information...</Text>
            </View>
        </View>
    )
}