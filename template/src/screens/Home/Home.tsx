import { WrapperContainer } from "@components/atoms";
import EmptyComp from "@components/molecules/EmptyComp";
import HomeHeader from "@components/molecules/HomeHeader";
import HomeListHeader from "@components/molecules/HomeListHeader";
import HomeListItems from "@components/molecules/HomeListItems";
import ModalSheet, { ModalSheetRef } from "@components/molecules/ModalSheet";
import { useCustomQuery } from "@hooks/useMutationQuery";
import { HomeData } from "@models/HomeData";
import { HomeStackParamList } from "@navigations/MainStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { moderateScale } from "@utils/scaling";
import React, { useCallback, useMemo, useRef } from "react";
import { FlatList, View } from "react-native";

const ItemSeparatorComponent = (): React.JSX.Element => (
  <View style={{ height: moderateScale(20) }} />
);

const Home = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const modalSheetRef = useRef<ModalSheetRef>(null);

  const { data: posts, isLoading, isError } = useCustomQuery<HomeData>("/products", "?limit=150");

  const memoizedPosts = useMemo(() => posts, [posts]);

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
        renderItem={(props) => <HomeListItems {...props} navigation={navigation} />}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={(item, index) => String(item?.id || index)}
        ListEmptyComponent={<EmptyComp isError={isError} isLoading={isLoading} />}
      />

      {/* Bottom Modal Sheet */}
      <ModalSheet ref={modalSheetRef} />
    </WrapperContainer>
  );
};

export default Home;
