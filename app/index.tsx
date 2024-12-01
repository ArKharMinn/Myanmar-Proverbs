import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

export default function Index() {
  const [title, setTitle] = useState<any>([]);
  const mmTitle = useSelector((state) => state.Tbl_MMProverbsTitle);

  useEffect(() => {
    setTitle(mmTitle);
  }, []);

  return (
    <View style={tw`p-1 rounded`}>
      <ScrollView contentContainerStyle={tw`gap-4`}>
        <View style={tw`gap-3`}>
          <Text style={tw`text-lg font-bold text-[#B34813]`}>မြန်မာစကားပုံ</Text>
          <Text style={tw`text-blue-600`}>
            "စကားပုံဟူသည် လူအများ ဆင်ခြင်မှတ်သားဖွယ် ဖြစ်အောင် စံပြုပုံခိုင်း
            အသုံးပြုလေ့ရှိသော ထိရောက်ကျစ်လျစ်သည့် စကားရပ်" ဖြစ်ပါသည်။
          </Text>
        </View>
        <Text style={tw`text-center text-green-500 px-4s`}>မိမိကြည့်ရှုလိုသော သက်ဆိုင်ရာ အက္ခရာကိုနှိပ်၍ ရှာဖွေဖတ်ရှုနိုင်ပါသည်။</Text>
        <View style={tw`border p-2 rounded gap-2`}>
          <Text
            style={tw`text-center border rounded mx-1 p-3 font-bold text-lg text-blue-600`}
          >
            မြန်မာစကားပုံအက္ခရာစဉ်ဇယား
          </Text>
          <View style={tw`flex-row flex-wrap items-center justify-center`}>
            {title.map((item: any) => {
              return (
                <TouchableOpacity
                  key={item.TitleId}
                  onPress={()=>router.push(`/detail/${item.TitleId}`)}
                  style={tw`w-20 m-1 rounded border bg-green-300 p-3`}
                >
                  <Text style={tw`text-center underline text-purple-600`}>
                    {item.TitleName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
