import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Messages from '@/components/messages'
import { useState, useEffect, useRef } from 'react';
import Input from '@/components/input'

function randomName() {
  const adjectives = [
    'autumn', 'hidden', 'bitter', 'misty', 'silent', 'empty', 'dry', 'dark',
    'summer', 'icy', 'delicate', 'quiet', 'white', 'cool', 'spring', 'winter',
    'patient', 'twilight', 'dawn', 'crimson', 'wispy', 'weathered', 'blue',
    'billowing', 'broken', 'cold', 'damp', 'falling', 'frosty', 'green', 'long',
    'late', 'lingering', 'bold', 'little', 'morning', 'muddy', 'old', 'red',
    'rough', 'still', 'small', 'sparkling', 'shy', 'wandering',
    'withered', 'wild', 'black', 'young', 'holy', 'solitary', 'fragrant',
    'aged', 'snowy', 'proud', 'floral', 'restless', 'divine', 'polished',
    'ancient', 'purple', 'lively', 'nameless'
  ];
  const nouns = [
    'waterfall', 'river', 'breeze', 'moon', 'rain', 'wind', 'sea', 'morning',
    'snow', 'lake', 'sunset', 'pine', 'shadow', 'leaf', 'dawn', 'glitter',
    'forest', 'hill', 'cloud', 'meadow', 'sun', 'glade', 'bird', 'brook',
    'butterfly', 'bush', 'dew', 'dust', 'field', 'fire', 'flower', 'firefly',
    'feather', 'grass', 'haze', 'mountain', 'night', 'pond', 'darkness',
    'snowflake', 'silence', 'sound', 'sky', 'shape', 'surf', 'thunder',
    'violet', 'water', 'wildflower', 'wave', 'water', 'resonance', 'sun',
    'wood', 'dream', 'cherry', 'tree', 'fog', 'frost', 'voice', 'paper', 'frog',
    'smoke', 'star'
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

export default function Home() {
  const [messages, setMessages] = useState([{
    id: '1',
    data: 'Hi! Welcome to the Pals',
    member: {
      id: '1',
      clientData: {
        color: '#C079D9',
        username: 'bluemoon',
      },
    },  
  }]);
  const [me, setMe] = useState({
    username: randomName(),
    color: randomColor(),
  });

  function onSendMessage(message) {
    const newMessage = {
      data: message,
      member: {
        clientData: me
      }
    }
    setMessages([...messages, newMessage])
  }

  return (
    <>
      <Head>
        <title>Pals</title>
        <meta name='description' content='Your brand-new chat app!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.app}>
        <div className={styles.appContent}>
          <Messages messages={messages} me={me}/>
          <Input
            onSendMessage={onSendMessage}
          />
        </div>
      </main>
    </>
  )
}
