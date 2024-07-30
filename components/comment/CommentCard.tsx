import { ICommentModel } from "@/services/comments/model";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ICommentCardProps {
  comment: ICommentModel;
}

const CommentCard: React.FC<ICommentCardProps> = ({ comment }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/comments/${comment.id}`);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      className='bg-gray-100 rounded-lg shadow-lg p-4 mb-4'
    >
      <View>
        <Text className='text-lg font-semibold mb-2'>{comment.name}</Text>
        <Text className='text-base mb-2'>{comment.body}</Text>
        <Text className='text-sm text-gray-500'>{comment.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommentCard;
