'use client'
import { addEditorData } from "@/lib/Redux/editorData";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import {useSelector, useDispatch} from 'react-redux';

export default function Editor(){
    const data = useSelector((state:any)=>state.editor);
    const dispatch :any= useDispatch();

    return (
        <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
                const data:any = editor.getData();
                dispatch(addEditorData(data));
              }}
        />
    );
};