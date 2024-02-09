import {useState, useEffect} from 'react';
import {db, auth} from './firebaseConnection'

import {
  doc,
  SetDoc,
  Collection,
  addDoc,
  getDoc,
  getDocs,
  uptateDoc,
  deleteDoc,
  onSnapshot,
  collection

}from 'firebase/firestore'

import{
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged

}from 'firebase/firestore'

function App(){
  const [titulo, setTitulo] =  useState("");
  const [autor, setAutor] =  useState("");
  const [IdPost, setIdPost] =  useState("");

  const[email, setEmail] = useState("");
  const [senha,SetSenha] = useState("");

  const [poosts, setPosts] = useState([]);

useEffect (() => {
  async function consultarPosts(){
    const dados = onSnapshot(collection(db,"post"), (snapshot) =>{
      let listasPost = [];
      snapshot.forEach((doc) => {
        listasPost.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        
        })
      }
      )
      setPost(listasPost);
    })
  }
  consultarPosts();

},[])
async function adicionarPost(){
  await addDoc(collection(db,"post"),{
    titulo: titulo,
    autor:autor,
  }).then(() =>{
    setIdPost("")
    setTitulo("")
    setAutor("")
  }).catch((error) => {
    console.log(error)
  })
async function buscarPost(){
  const postsReferencia = collection (db, "post")
  await getDocs(postsReferencia).then(
    (snapshot)=>{
      let lista =[];
      snapshot.forEach((doc) =>{
        lista.punch({
          id: doc.id,
          titulo: doc.data().tituto,
          autor: doc.data().autor,
        })
      })
        setPosts(lista);
}).catch((error) => {
  console.log(error);
})
}
}
async function editarPost (){
  const dados = doc(db,"post", idPost);
  await uptadeDoc(dados, {
    titulo: titulo,
    autor: autor,
  }).then(()=>{
    setIdPost("");
    setTitulo("");
    setAutor("");
  }).catch((error) => {
    console.log(error)
  })
}
async function excluirPost(idPost){
  const dados = doc(db,"post", idPost);

  await deleteDoc(dados).then(()=>{
    alert("POST EXCLUIDO")
  })
}
return(  <div className="container">
{/* Formulário para adicionar uma nova postagem */}
<div className="form-container">
  <h2>Adicionar Nova Postagem</h2>
  <input
    type="text"
    placeholder="Título"
    value={titulo}
    onChange={(e) => setTitulo(e.target.value)}
  />
  <input
    type="text"
    placeholder="Autor"
    value={autor}
    onChange={(e) => setAutor(e.target.value)}
  />
  <button onClick={adicionarPost}>Adicionar Postagem</button>
</div>

{/* Lista de Postagens */}
<div className="posts-container">
  <h2>Postagens</h2>
  <ul>
    {posts.map((post) => (
      <li key={post.id} className="post">
        <strong>Título:</strong> {post.titulo} | <strong>Autor:</strong> {post.autor} |
        <button className="edit-button" onClick={() => editarPost(post.id)}>Editar</button>
        <button className="delete-button" onClick={() => excluirPost(post.id)}>Excluir</button>
      </li>
    ))}
  </ul>
</div>
</div>);


}
export default App;

