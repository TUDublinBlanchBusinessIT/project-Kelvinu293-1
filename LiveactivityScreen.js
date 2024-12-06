import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Ima = require("./camping.png");

export default function LiveactivityScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Live Activity Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      </TouchableOpacity>
      <Image source={Ima} style={{ width: 300, height: 300 }} />
      <Text>Come to camp in the wild fire
        Four cows used to live in a forest. They were good friends and used to graze together in a
        particular place every day. The friendship between the cows was very strong, and they used to chase away the attackers. A big lion was behind these cows and wanted to kill and eat them, but he was always hushed away by the cows. The lion made a plan and turned the four cows against each other with the help of other animals. The four cows quarrelled and began to graze in different directions and all alone. The lion saw this as an opportunity and killed all the cows one by one.
        With the help of the story with pictures, it is clear that when we are united, no one will be
        able to harm or do anything to us. Therefore, we must not fight or quarrel with our near and dear ones and stay united. When we are united, we will be able to face all the difficulties of the world together
        and will also be able to solve difficult problems with the help of our good friends.
        When it comes to bedtime stories, the parents can have a good challenge at their hands. Children always want to hear new stories, which can be a herculean task for parents, to discover a new story every time. In this article, we have covered the “Cow and Tiger” story in English for kids, which is a very simple story with a lesson.
        The narration is easy to understand. Therefore, it is a good choice if you are looking for a simple and easy story for children.
        The tiger listened to the cow’s ardent request and finally said, “You can go, but you have to return soon.”
        The cow returned to her shed immediately and
        milked her calf. Then she started for the forest again, reassuring her calf that she’ll be back very soon. Soon, she reached the forest and gave a cry for the tiger. The tiger came and saw the cow and was surprised to see her back. The tiger hasn’t seen encountered such sincerity, morality and honesty from any animal. He was overwhelmed by the cow’s honesty and said, “I can’t harm you, instead, I will protect you
        from other wild animals in the future. I want that the character you possess to encourage and impact other animals.”
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
