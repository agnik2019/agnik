//Import Images
import ds from './img/ds1.jpg';
import theracer from './img/wd.jpg';
import ds2 from './img/ds2.jpg';
import android from './img/android.jpg';



export const MovieState = () => {
  return [
    {
      title: 'Data Science',
      mainImg: ds,
      secondaryImg: ds2,
      url: '/work/dataScience',
      projects: [
        {
          title: 'Image Caption Generator',
          tools:'PYTHON, TENSORFLOW, OPEN-CV',
          description:'"lorem30"',
          github_link:"https://github.com/agnik2019/image_caption_generator",
        },
        {
          title: 'Gender Classification',
          description:'"yo yo lorem20',
          github_link:"https://github.com/agnik2019/image_caption_generator",

        },
        {
          title: 'Facial & Speech Emotion Recognition',
          description:'lorem20 ',
          github_link:"https://github.com/agnik2019/image_caption_generator",
        },
      ],
    },
    {
      title: 'Android development',
      mainImg: android,
      url: '/work/android',
      projects: [
        {
          title: 'Android Note App',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'MEME Sender',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Social App',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Web Development',
      mainImg: theracer,
      url: '/work/web',
      projects: [
        {
          title: 'Lets Go',
          description:
            '“You can see various tourist spots and also can add a tourist spots and give your ratings”',
        },
        {
          title: 'Restaurant site',
          description:
            '“You can see foods available”',
        },
        {
          title: 'My old portfolio',
          description:
            '“This website is my old portfolio”',
        },
      ],
    },
  ];
};
