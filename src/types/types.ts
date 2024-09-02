export type TObject = {
    date: string,
    title: string,
    description?: string,
    image: string
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
    isError?: boolean
}

export type TTabsElements = {
    style: string,
    title: string, 
    elementState: boolean
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
