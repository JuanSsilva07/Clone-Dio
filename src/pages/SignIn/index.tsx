import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import {
  Column,
  Container,
  CriarText,
  TermoText,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  LoginText,
} from "./styles";
import { IFormDataLogin } from "./types";

const schema = yup
  .object({
    name: yup.string().required("Campo Obrigatório"),
    email: yup
      .string()
      .email("email não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo, 3 caracteres")
      .required("Campo Obrigatório"),
  })
  .required();

const SignIn = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormDataLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormDataLogin) => {
    try {
      const { data } = await api.post(
        `users?name=${formData.name}&email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 0) {
        alert("Usuário já existente");
      } else {
        navigate("/feed");
      }
    } catch {
      alert("Ocorreu algum erro, tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <>
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  name="name"
                  errorMessage={errors?.name?.message}
                  control={control}
                  placeholder="Nome Completo"
                  type="text"
                  leftIcon={<MdAccountCircle />}
                />
                <Input
                  name="email"
                  errorMessage={errors?.email?.message}
                  control={control}
                  placeholder="E-mail"
                  type="mail"
                  leftIcon={<MdEmail />}
                />
                <Input
                  name="password"
                  errorMessage={errors?.password?.message}
                  control={control}
                  placeholder="Password"
                  type="password"
                  leftIcon={<MdLock />}
                />
                <Button title="Entrar" variant="secondary" type="submit" />
              </form>
              <Column>
                <TermoText>
                  Ao clicar em "criar minha conta grátis", declaro que aceito as
                  Políticas de Privacidade e os Termos de Uso da DIO.
                </TermoText>
                <>
                  <CriarText>
                    Já tenho conta. <LoginText>Fazer login</LoginText>
                  </CriarText>
                </>
              </Column>
            </>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignIn };
