import CommentCard from "@/components/comment/CommentCard";
import useComments from "@/hooks/useComments";

import { FlatList, Text } from "react-native";
import { View } from "react-native";

const CommentPage = () => {
  const {
    data: commentsData,
    isLoading,
    fetchNextPage,
    isFetching,
  } = useComments();

  if (!commentsData || isLoading) {
    return <Text>Loading...</Text>;
  }

  const renderItem = ({ item }: { item: (typeof commentsData)[number] }) => (
    <CommentCard comment={item} />
  );
  return (
    <View className='flex-1'>
      <FlatList
        data={commentsData.pages.flat()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          fetchNextPage();
        }}
        ListFooterComponent={isFetching ? <Text>Loading...</Text> : null}
      />
    </View>
  );
};

export default CommentPage;
