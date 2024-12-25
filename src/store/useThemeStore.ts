import { create } from 'zustand';

interface ISettings {
    theme: string;
    setTheme: (theme: string) => void;
}

export const useThemeStore = create<ISettings>(set => ({
    theme: localStorage.getItem('chat-theme') || 'coffee',
    setTheme: (theme: string) => {
        localStorage.setItem('chat-theme', theme);
        set({ theme });
    },
}));
