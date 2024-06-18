---
title: "Digitalising Let's Talk!, a Card Game that Develops Students’ Academic Discussion Skills"
tags: "web, mvp, gamification, edu-tech, public-sector"
date: "2022-21-12"
author: "Ryan Tan"
image: "/img/lets-talk/promo.png"
---

![a game of lets talk](/img/lets-talk/promo.png)

### Introduction

[Lets Talk!](https://academyofsingaporeteachers.moe.edu.sg/elis/resources/play) is a card game developed by the English Language Institute of Singapore (ELIS, MOE) that develops students’ academic discussion skills. The goal of the Let's Talk! card game is to encourage students to develop and practice the communication skills that are necessary for effective academic discussions in subjects such as math, science, and the humanities. The cards in the game feature "talk moves" that students can use to participate in discussions, as well as language scaffolds in the form of sentence stems to help them express their ideas. These sentence stems represent specific "academic conversation skills" that are designed to support students in engaging in productive discussions. By using the Let's Talk! card game, students can learn and apply these communication skills, which will help them to effectively contribute to academic discussions in their classrooms. The Let's Talk! team approached us looking to build an Minimum Viable Product to validate the idea of digitalising Let's Talk!, to overcome the physcial limitations of the original card-game.

| ![original card game](/img/lets-talk/physical.jpg) |
| :------------------------------------------------: |
|   _The original physical version of Let's Talk!_   |

### MVP Features

Over the course of **4 weeks**, we were able to quickly build a minimum viable product (MVP) for the Let's Talk! card game which included:

1. **Room system **(similar to Kahoot), where teachers can create a room and students can join using a unique code.

|                          ![landing page](/img/lets-talk/landing.png)                           |
| :--------------------------------------------------------------------------------------------: |
| _The Let's Talk Landing Page where students are able to join a room by entering the room code_ |

2. We also implemented a **turn-based system**, which ensures that every student has an opportunity to play their turn and participate in the discussion.

|                   ![a game of lets talk](/img/lets-talk/promo.png)                    |
| :-----------------------------------------------------------------------------------: |
| _The Let's Talk game page where a student (Ryan) is prompted to play a starting card_ |

3. At the end of the game, we included a **reflection board** where students can share one thing that they learned during the discussion. This reflection data can be exported in CSV format, allowing teachers to track the progress and learning of their students over time.

|            ![reflection](/img/lets-talk/reflection.png)             |
| :-----------------------------------------------------------------: |
| _The Let's Talk reflection page which appears at the end of a game_ |

Overall, our MVP for the Let's Talk! card game included a range of features that are designed to support and encourage productive academic discussions in the classroom.

### Tech Stack

Our tech stack for the Let's Talk! card game included **ReactJS, socket.io, ExpressJS,** and **Semantic UI**.

1. **ReactJS** is a popular JavaScript library for building user interfaces, which we used to create the front-end of the game.

2. **Socket.io** is a real-time communication library that we used to implement the room system and turn-based gameplay, allowing students to interact with each other in real-time.

3. **ExpressJS** is a web application framework for Node.js that we used to build the back-end of the game, including the reflection board and CSV export feature.

4. **Semantic UI** is a library of reusable UI components that we used to create a consistent and visually appealing design for the game, helping to create a cohesive and professional look and feel.
