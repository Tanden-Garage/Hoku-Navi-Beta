import type { UserProps, UserListProps } from "@/types/User"

import type { FC } from "react"

const UserTableItem: FC<UserProps> = ({ user }) => {
  const { id, name, gitHubUserName } = user
  const gitHubUserPage = `https://github.com/${gitHubUserName}`

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {gitHubUserName ? (
          <a
            href={gitHubUserPage}
            target="_blank"
            rel="noreferrer"
            className="link link-secondary"
          >
            {gitHubUserName}
          </a>
        ) : (
          <span className="text-error">{"none"}</span>
        )}
      </td>
    </tr>
  )
}

export const UserTable: FC<UserListProps> = ({ users }) => {
  return (
    <table className="table shadow">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableItem user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  )
}
