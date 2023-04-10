#!/bin/sh

git init 

echo "Escreva seu nome de usuário"
read u_name
git config user.name $u_name


echo "Escreva seu nome de email"
read u_email
git config user.email $u_email

echo "Cole o link do Repositório do git"
read ul_repo
git remote add origin $ul_repo

git add .
git commit -m "Commit inicial" 

echo "Entre nesse site:"
echo "https://github.com/$u_name/settings/tokens"
echo"Crie um token e salve-o" 
echo "Copie e depois cole/PASTE o seu token no campo que solicita o password" 

git push origin master 

echo "Confira se os arquivos estão salvos no repositório do git"
echo "ul_repo"
