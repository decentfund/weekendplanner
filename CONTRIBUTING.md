Contibute to Weekend Planner dApp for EVM
=========================================

### Git workflow

Fork this repo and create feature branch for every feature. When done, submit a pull request.

__Branch naming__

Branch name should reflect feature name. If using multiple words, use dash (`-`)
as delimiter. Also, include issue num prefix in branch name,
followed by dash (`-`).

_Correct:_

- `158-added-invite-button`

_Incorrect:_

- `158addedinvitebutton`
- `158_added_invite_button`
- `158/added_invite-button`
- `158-addedInviteButton`

__Commits:__

Commits should be atomic - the smaller they are, the better it gets.

__Commit messages:__

Start your commit message with capital letter and end with period (`.`).
First line should be commit description, no longer than 65 characters.
If you work on one of the issues, include issue number in your commit summary.
If what you have to say about the commit exceeds 65 characters, insert blank line
under summary and write the rest of the message, just make sure lines don't exceed
80 characters.

_Correct:_

    Adds awesome feature to supermodule #442.

or:

    Adds awesome feature to supermodule #442.

    The rest of the message can be as long as you want
    spanning across multiple lines.

__Making pull requests:__

When making pull request include original issue number to have reference to pull request from original issue.

__Merging pull requests:__

Make sure pull request passes all tests and always use Github's web interface
to do the merge.  If merge isn't possible, merge master branch into your local
feature branch, resolve any conflicts that might happen and commit the merge.
After that, use web interface to merge pull request. Always delete remote
feature branch after merge.

__IMPORTANT:__ Never push to default branch, even if your access rights permit that.

### Naming conventions

__Files:__

When naming files and directories, always use lowercase lettes and dash (`-`) as delimiter.

_Correct:_

- `file-name.ext`

_Incorrect:_

- `fileName.ext`
- `file_name.ext`

### Redux actions naming style

export const DELETE_EVENT_**REQUEST** = 'DELETE_EVENT_**REQUEST**';  
export const DELETE_EVENT_**SUCCESS** = 'DELETE_EVENT_**SUCCESS**';  
export const DELETE_EVENT_**ERROR** = 'DELETE_EVENT_**ERROR**';  
