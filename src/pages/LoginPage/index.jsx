import { Header } from "Components";
import { DiagonalDensePattern } from "Patterns";
import "./styles.css";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="login-section">
          <div className="login-section__image-wrapper">
            <DiagonalDensePattern />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
