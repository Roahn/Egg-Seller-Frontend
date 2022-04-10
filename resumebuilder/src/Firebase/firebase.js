import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
var firebaseConfig = {
  apiKey: 'AIzaSyAEK48N-gPRDtSKAy-nHS5R2KuLe_s7h50',
  authDomain: 'resume-builder-ad297.firebaseapp.com',
  projectId: 'resume-builder-ad297',
  storageBucket: 'resume-builder-ad297.appspot.com',
  messagingSenderId: '175132131853',
  appId: '1:175132131853:web:b3a455da251c1dc97ccb44',
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);