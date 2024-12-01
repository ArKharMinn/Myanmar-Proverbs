import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import Entypo from "@expo/vector-icons/Entypo";

const detail = () => {
  const { id } = useLocalSearchParams();
  const verb = useSelector((state) => state.Tbl_MMProverbs);
  const [data, setData] = useState<any>([]);
  const proverb = useSelector((state) => state.Tbl_MMProverbsTitle);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const item = verb.filter((item: any) => item.TitleId === Number(id));
    setData(item);

    const titleData = proverb.find((item: any) => item.TitleId == Number(id));
    setTitle(titleData);
  }, [id]);
  return (
    <View style={tw`px-2 ${data.length == 0 ? "bg-white" : ""}`}>
      {data.length != 0 ? (
        <ScrollView>
          <View style={tw`flex-row items-center mt-2 gap-2`}>
            <Entypo name="open-book" size={24} style={tw`font-bold text-blue-600`} />
            <Text style={tw`text-blue-600 font-bold text-lg`}>
              {title.TitleName} (စကားပုံ)
            </Text>
          </View>
          {data.map((item: any) => {
            return (
              <View style={tw` gap-2 border-b p-3`} key={item.ProverbId}>
                <Text
                  style={tw`text-violet-600 underline text-[16px] font-semibold`}
                >
                  {item.ProverbName}
                </Text>
                <Text style={tw`text-[13px] text-gray-600`}>
                  {item.ProverbDesp}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View style={tw`h-full items-center justify-center`}>
          <Image source={require("@/assets/images/404.jpg")} />
        </View>
      )}
    </View>
  );
};

export default detail;
