import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { FontAwesome } from '@expo/vector-icons';
import { Header } from "../components/Header";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ColorPicker } from 'react-native-color-picker';


export function CreateFolders() {

  const { navigate } = useNavigation()

  return (

    <View className="flex-1 bg-background pt-16 pb-10">

      <Header />
      <Text className="w-full font-semibold text-lg text-white mx-1 text-center">
        Crie uma pasta
      </Text>
      <View className='border border-violet-600 mt-1'></View>
      <View className="flex justify-center items-center px-12 pt-12 pb-10">

<<<<<<< HEAD
                <TextInput
                    className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
                    placeholder="Escolha a cor da pasta"
                    placeholderTextColor={colors.zinc[400]}
                />
=======
        <TextInput
          className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
          placeholder="Nome..."
          placeholderTextColor={colors.zinc[400]}
        />

        <TouchableOpacity
          className="w-52 h-14 flex-row items-center justify-center bg-green-500 rounded-md mt-16"
          activeOpacity={0.7}
        //onPress={CreateNewBook}
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />

          <Text className="font-semibold text-base text-white ml-2 ">
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}
>>>>>>> 0e4f46b757a315255ced91f3f969036291fb7c9f


