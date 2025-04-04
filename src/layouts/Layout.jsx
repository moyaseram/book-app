import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://botostart.ir">Botostart</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Yas with ❤️</p>
      </footer>
    </>
  );
};

export default Layout;
