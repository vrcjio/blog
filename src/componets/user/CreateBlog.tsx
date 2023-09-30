'use client'
import React from 'react'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { addNewPostInRedux, getUserPosts } from '@/lib/Redux/post';
import { postBlogAPI } from '@/util/BlogAPI';
import { addEditorData } from '@/lib/Redux/editorData';


const Editor = dynamic(() => import("./Editor"), { ssr: false });

export default function CreateBlog(){
  const [post, setPost] = React.useState('');
  const [dropdownId, setId]: any = React.useState(null);
  const [mainCategory, setMainCatgory] = React.useState('');
  const [subCategory, setSubCatgory] = React.useState('');
  const [shortNote, setShortNote] = React.useState('');
  const [postTitle, setPostTitle] = React.useState('');
  const [Error, setError] = React.useState({
    postTitle: '',
    post: '',
    shortNote: ''
  })
  const cat = useSelector((state: any) => state.post.categories);
  const user = useSelector((state: any) => state.user.data);
  const editorData = useSelector((state: any) => state.editor.content);
  const dispatch:any = useDispatch();
  const lengthSet = 50;




  const getIndex = (value: string, index: number) => {
    setId(index);
    setSubCatgory(cat[index].subCategories[0]);
    setMainCatgory(value);
  }

  const postBlog = async(userPost: any) =>{
    try {
      const data = await postBlogAPI(userPost);
      toast.success('successfully published your post 👍');
      dispatch(addNewPostInRedux());
      setPost('');
      setPostTitle('')
      setShortNote('')
      dispatch(addEditorData(''));
      dispatch(addNewPostInRedux());
    } catch (error: any) {
      toast.error('Server Error Detected. 😒');
    }
  }

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setPost(editorData);
    let accepted = true;
    if (post === '') {
      setError({ ...Error, post: 'press second time' })
      accepted = false;
    }
    if (postTitle === '') {
      setError({ ...Error, postTitle: 'is empty' })
      accepted = false;
    }
    if (shortNote === '') {
      setError({ ...Error, shortNote: 'is empty' })
      accepted = false;
    }
    if (accepted && user.username && shortNote && user._id) {
      if (shortNote.length > lengthSet) {
        setShortNote(shortNote.substring(0, lengthSet));
      }
      if (shortNote.length <= lengthSet) {
        const postData = {
          title: postTitle,
          category: mainCategory,
          subCategory: subCategory,
          content: post,
          shortNote:shortNote.slice(0,lengthSet),
          authorName: user.username,
          authorId: user._id,
          createdAt: new Date(),
        }
        postBlog(postData);
      }
    }
  }


  React.useEffect(() => {
    getIndex(cat[0].Main, 0);
    setSubCatgory(cat[0].subCategories[0]);
  }, []);

  React.useEffect(() => {
    setError({ ...Error, post: '' })
  }, [editorData]);

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input value={postTitle} onChange={(e) => { setPostTitle(e.target.value); setError({ ...Error, postTitle: '' }) }} placeholder='Enter Title here' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="titleHelp" />
          <div id="emailHelp" className="form-text text-danger">{Error.postTitle}</div>
        </div>

        <div className='flex'>
          <div className="dropdown m-3">
            Select Main Category<br />
            <input value={mainCategory} className="dropdown-toggle " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {
                cat.map((item: any, index: number) => {
                  return <li onClick={() => getIndex(item.Main, index)} key={index} className="dropdown-item" role="button">{item.Main}</li>
                })
              }

            </ul>

          </div>
          {
            dropdownId != null &&
            <div className="dropdown m-3">
              Select Sub Category<br />
              <input value={subCategory} className="dropdown-toggle " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  cat[dropdownId].subCategories.map((item: any, index: number) => {
                    return <li onClick={() => setSubCatgory(item)} key={index} className="dropdown-item" role="button">{item}</li>
                  })
                }

              </ul>
            </div>
          }
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputPassword1fdjks" className="form-label">Short Note {lengthSet - shortNote.length}/{lengthSet} </label>

          <textarea value={shortNote} style={{ width: "100%" }} placeholder='Mamimum 200 latters'
            onChange={(e) => {
              const data = e.target.value;
              if (shortNote.length < lengthSet || data.length < shortNote.length) {
                setShortNote(data);
                setError({ ...Error, shortNote: '' });
              }
            }} />

          <div id="descriptionHelp" className="form-text text-danger">{Error.shortNote}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <Editor />
          <div id="descriptionHelp" className="form-text text-danger">{Error.post}</div>
        </div>
        <button type="submit" className="btn btn-outline-success">Create</button>
      </form>
    </>
  )
}
