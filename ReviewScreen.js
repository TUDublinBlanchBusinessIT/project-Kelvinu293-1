import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


const StarRow = ({ rating, maxRating, text }) => {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i <= rating ? solidStar : regularStar}
        size={24}
        color="blue"
        style={styles.star}
      />
    );
  }

  return (
    <View style={styles.row}>
      <View style={styles.starsContainer}>{stars}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default function ReviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Screen</Text>
      <StarRow rating={3} maxRating={5} text="Rated 3/5: Okay" />
      <StarRow rating={5} maxRating={5} text="Rated 5/5: Amazing" />
      <StarRow rating={4} maxRating={5} text="Rated 4/5: Good" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  star: {
    marginHorizontal: 2,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },

});
