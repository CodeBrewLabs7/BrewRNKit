import { WrapperContainer } from "@components/atoms";
import ErrorComp from "@components/molecules/ErrorComp";
import HomeHeader from "@components/molecules/HomeHeader";
import HomeListHeader from "@components/molecules/HomeListHeader";
import HomeListItems from "@components/molecules/HomeListItems";
import ModalSheet, { ModalSheetRef } from "@components/molecules/ModalSheet";
import { HomeStackParamList } from "@navigations/MainStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { moderateScale, verticalScale } from "@screens/Onboarding/scaling";
import React, { useCallback, useMemo, useRef } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import useCustomQuery from "src/hooks/userUser";
import { HomeData } from "src/model/HomeData";

const Home = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const modalSheetRef = useRef<ModalSheetRef>(null);
  const url = "https://dummyjson.com/products?limit=150";

  const {
    data: posts,
    isLoading,
    isError,
  } = useCustomQuery<HomeData | any>(url);

  const memoizedPosts = useMemo(() => {
    return posts;
  }, [posts]);

  const handleToggleSheet = useCallback(() => {
    if (modalSheetRef.current) {
      modalSheetRef.current.toggleSheet();
    }
  }, []);

  return (
    <WrapperContainer>
      <View style={{ marginHorizontal: moderateScale(20) }}>
        <HomeHeader title="BLOGS_POT" onPress={handleToggleSheet} />
      </View>
      <FlatList
        ListHeaderComponent={<HomeListHeader />}
        data={memoizedPosts?.products || []}
        renderItem={(props) => (
          <HomeListItems {...props} navigation={navigation} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: moderateScale(20) }} />
        )}
        keyExtractor={(item, index) => String(item?.id || index)}
        ListEmptyComponent={
          isLoading ? <ActivityIndicator /> : isError ? <ErrorComp /> : <></>
        }
      />

      {/* Bottom Modal Sheet */}
      <ModalSheet ref={modalSheetRef} />
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(8),
  },
});
export default Home;
