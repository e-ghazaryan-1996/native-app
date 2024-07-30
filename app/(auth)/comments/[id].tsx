import CommentCard from "@/components/comment/CommentCard";
import useCommentDetail from "@/hooks/useCommentDetail";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const CommentDetailPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data } = useCommentDetail(id);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <CommentCard comment={data} />
    </View>
  );
};

export default CommentDetailPage;
