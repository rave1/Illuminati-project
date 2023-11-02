# GIT 101

### Show status
`git status` - command that shows us what has changed after last commit

example:
```zsh
(base) ➜  Illuminati-project git:(main) ✗ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        backend/
```
### Add files to commit
`git add FILES/FOLDER` - this command adds files or folders to commit`

example:
```zsh
(base) ➜  Illuminati-project git:(main) ✗ git add .
(base) ➜  Illuminati-project git:(main) ✗ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .gitignore
        modified:   README.md
        new file:   backend/backend/__init__.py
        new file:   backend/backend/asgi.py
        new file:   backend/backend/settings.py
        new file:   backend/backend/urls.py
        new file:   backend/backend/wsgi.py
        new file:   backend/manage.py
        new file:   backend/requirements.txt
```


### Commit the files
`git commit -m "feat: backend init"` - this command is used to commit the files to the branch NOTE THE `-m`, the argument is being used to supply something known as commit message.
```zsh
(base) ➜  Illuminati-project git:(main) ✗ git commit -m "feat: backend init"
[main ad119d3] feat: backend init
 9 files changed, 427 insertions(+), 3 deletions(-)
 create mode 100644 .gitignore
 create mode 100644 backend/backend/__init__.py
 create mode 100644 backend/backend/asgi.py
 create mode 100644 backend/backend/settings.py
 create mode 100644 backend/backend/urls.py
 create mode 100644 backend/backend/wsgi.py
 create mode 100755 backend/manage.py
 create mode 100644 backend/requirements.txt
 ```

 ### Push the changes to origin repo (github)
 `git push origin BRANCH` - this command pushes local changes to remote repository (github)
 
 example:

 ```ZSH
 (base) ➜  Illuminati-project git:(main) ✗ git push origin main
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 16 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (13/13), 5.34 KiB | 5.34 MiB/s, done.
Total 13 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To github.com:rave1/Illuminati-project.git
   dffa7f7..ad119d3  main -> main
```
