import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public mainContent: {
    title: string;
    content: string;
    image: string;
    imageAlt: string;
    subarticlesLeft: {
      title: string;
      content: string;
    }[];
    subarticlesRight: {
      title: string;
      content: string;
    }[];
  }[] = [
    {
      title: 'Achieve more for your faith than you ever imagined',
      content:
        'Harness the power of artificial intelligence to better understand the Bible, ask questions about religion or anything else in your life that troubles you, and find yourself immersed in a truly biblical learning experience.',
      image: 'assets/img/Faith.png',
      imageAlt: 'Faith and doubt',
      subarticlesLeft: [
        {
          title: 'Get Answers to Any of Your Deepest Questions',
          content:
            'Our Bible Study App is powered by the most advanced AI model and is able to answer any questions you may have about biblical figures, events, doctrines, or any other aspect of your life.',
        },
        {
          title: 'Learn More About Religion and Your Faith',
          content:
            'Religion is more than learning about certain figures and events. Use our Bible Study App to gain a better understanding of verses or passages, the true meaning of theology, historical context, and AI-generated explanations, interpretations, and answers for the most intricate spiritual questions.',
        },
        {
          title: 'Get Truly Inspiring Guidance',
          content:
            'We trained our AI to create personalized guidance and to provide advice deeply rooted in biblical principles. Whenever you seek advice, ask your questions and our AI will help you navigate various situations according to the religious principles you follow.',
        },
      ],
      subarticlesRight: [
        {
          title: 'Get Access to Your Preferred Bible Version',
          content:
            'Our app gives you the choice you deserve in terms of Bible versions. Whether you prefer the King James version, the English standard version, the New Living Translation, the Christian Standard Bible, or the New International Version, all you need to do is make the choice.',
        },
        {
          title: 'Suitable for Everyone',
          content:
            'Whether you are just discovering your faith and spirituality or you are already a seasoned theologian, you will surely put the Bible Study App to good use and you will have tons of benefits from using it.',
        },
        {
          title: 'Remember your thoughts, questions, and prayers',
          content:
            'With our AI Bible study app, you will always have access to your previous chats.That means that you can always explore the things that troubled you in the past or the questions that were important for you at some point.',
        },
      ],
    },
    {
      title:
        'Our AI Bible Study App Will Change the Way You Explore Your Faith',
      content:
        'Spirituality and faith are personal matters that only each individual can evaluate and truly understand. How you let yourself be guided through this journey is your choice. Choose AI for the ultimate experience and the ultimate experience.',
      image: 'assets/img/Love.png',
      imageAlt: 'Love and relationship',
      subarticlesLeft: [
        {
          title: 'The Scripture No Longer Has Any Secrets',
          content:
            'The true meaning of the Bible has been searched for thousands of years. Now, with the power of AI at your fingertips, it is time to uncover everything you ever needed to know.',
        },
        {
          title: 'The Ultimate Religious Guidance',
          content:
            'AI will always give you precious advice based on the religious principles you believe in. Regardless of the situation, seeking guidance and advice has never been easier and more effective.',
        },
        {
          title: 'Strengthen Your Faith',
          content:
            'A deeper understanding of religion and spirituality will strengthen your belief and will make you truly appreciate God’s value in your life. With the AI guidance, you will receive a strong foundation for your faith.',
        },
      ],
      subarticlesRight: [
        {
          title: 'Create your own personalized prayer',
          content:
            'Just ask the app to create a personalized prayer based on the particular topic you are interested in or the question you’re struggling with. The AI will generate the ultimate prayers for your needs.',
        },
        {
          title: 'Feed Your Soul',
          content:
            'Nourish yourself spiritually by exposing yourself to God’s word and will. You will grow spiritually and you will receive the ultimate level of instruction, conviction, correction, and training in God’s ways. All enhanced through the power of AI.',
        },
        {
          title: 'Say No to Sin',
          content:
            'Learn to resist temptation and receive empowerment through the app for every right choice you make. The app will provide more clarity and will strengthen your understanding and belief in God’s ways, which will make resisting temptation the only natural choice',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
