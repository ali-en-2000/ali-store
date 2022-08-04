import {initializeApp} from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: runtimeConfig.FIREBASE_API_KEY,
    };
// Initialize Firebase
    const app = initializeApp(firebaseConfig);

})