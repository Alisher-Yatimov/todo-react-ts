export interface IPreset {
    primary: string;
    light: string;
    dark: string;
    text: string;
}

export interface ITheme {
    light: IPreset;
    dark: IPreset;
}
