
/*
 * GET home page.
 */

 //Arrays of strings of [name, image, id]
 //var array = [[]];

exports.view = function(req, res){
  res.render('index', {
    'posts':
    [
      {
        'name': 'Alex Garza',
        'level': 'Expert',
        'gym': 'RIMAC',
        'image': 'gym.jpg',
        'goals': "Build muscle, lose fat, be big.",
        'wantsToLearn': 'bench press and squat'
      },
      {
        'name': 'Antonio Simp',
        'level': 'Novice',
        'gym': 'Main Gym',
        'image': 'gym.jpg',
        'id': 'post2'
      }, 
      {
        'name': 'Emily Ferguson',
        'level': 'Expert',
        'gym': 'RIMAC',
        'image': 'gym.jpg',
        'goals': "Build muscle, lose fat, be big.",
        'wantsToLearn': 'bench press and squat'
      },
      {
        'name': 'Andrew Benser',
        'level': 'Expert',
        'gym': '24 Hour Fitness',
        'image': 'gym.jpg',
        'goals': "Build muscle, lose fat, be big.",
        'wantsToLearn': 'bench press and squat'
      },
    ]
  });

  /*res.render('index', {
    'projects': 
    [
      { 'name': 'Waiting in Line',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'Needfinding',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Prototyping',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Heuristic Evaluation',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Visualization',
        'image': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      },
      { 'name': 'Social design',
        'image': 'lorempixel.people.2.jpeg',
        'id': 'project6'
      },
      { 'name': 'Gestural interaction',
        'image': 'lorempixel.technics.2.jpeg',
        'id': 'project7'
      },
      { 'name': 'Design tools',
        'image': 'lorempixel.city.2.jpeg',
        'id': 'project8'
      }
    ]  
  });*/
};
