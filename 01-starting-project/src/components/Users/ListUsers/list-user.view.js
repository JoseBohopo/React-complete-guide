import Card from "../../UI/Card";
import styles from "./list-users.styles.module.css";

export const ListUsers = (props) => {
  const mappedUsers = props.list.map((user) => (
    <li key={user.id}>
      {user.name} {user.age}
    </li>
  ));
  return (
    <Card className={styles.users}>
      <ul>{mappedUsers}</ul>
    </Card>
  );
};
