export type TObject = {
    post: any,
    addToFavorites: (post: any) => void
}

export type TButton = {
    content: string,
    buttonState: boolean,
    typeButton: string
}

export type TInput = {
    compound?: string,
    inputType: string,
    title?: string,
    placeholderText: string,
    isActive: boolean,
    errorText?: string,
    isError?: boolean,
    value?: string
}

export type TTabsElements = {
    style: string,
    title: string, 
    elementState: boolean, 
    changeActive: () => void
}

export type TData = {
    "id": number,
    "image": string,
    "text": string,
    "date": string,
    "lesson_num": number,
    "title": string,
    "description": string,
    "author": number
}

export type TPost = {
    "id": number,
    "image": string,
    "text": string,
    "date": string,
    "lesson_num": number,
    "title": string,
    "description": string,
    "author": number
}

export type TContext = [
    string,
    (value: string) => void
]
