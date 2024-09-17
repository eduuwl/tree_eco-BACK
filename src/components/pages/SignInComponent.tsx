import { SetStateAction, useState } from 'react';
import axios from 'axios';
import styles from './SignInComponent.module.css';

import { FaUsers, FaPhone, FaMapLocationDot, FaLock, FaUserTie } from "react-icons/fa6";
import { IoDocument, IoMail } from "react-icons/io5";

function SignIn() {
    const [signInType, setSignInType] = useState('');
    const [formData, setFormData] = useState({
        nome_emp: '',
        CNPJ_emp: '',
        email_emp: '',
        contato_emp: '',
        endereco_emp: '',
        senha_emp: '',
        
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        senha: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSignInType = (type: SetStateAction<string>) => {
        setSignInType(type);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (signInType === 'cnpj') {
                console.log('Dados enviados:', formData); // Verificar dados
                await axios.post('http://localhost:3001/empresa', {
                    nome_emp: formData.nome_emp,
                    CNPJ_emp: formData.CNPJ_emp,
                    email_emp: formData.email_emp,
                    contato_emp: formData.contato_emp,
                    endereco_emp: formData.endereco_emp,
                    senha_emp: formData.senha_emp,
                });
                alert('Empresa cadastrada com sucesso!');
            } else if (signInType === 'cpf') {
                console.log('Dados enviados:', formData); // Verificar dados
                await axios.post('http://localhost:3001/cliente', {
                    nome: formData.nome,
                    cpf: formData.cpf,
                    email: formData.email,
                    telefone: formData.telefone,
                    senha: formData.senha
                });
                alert('Cliente cadastrado com sucesso!');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro no Axios:', error.response?.data || error.message);
                alert(`Erro ao cadastrar: ${error.response?.data?.message || error.message}`);
            } else {
                console.error('Erro desconhecido:', error);
                alert('Erro desconhecido ao cadastrar.');
            }
        }
    };

    return (
        <div className={`${styles.container} ${signInType === 'cpf' ? styles.cpf_sign_in_js : signInType === 'cnpj' ? styles.cnpj_sign_in_js : ''}`}>
            <div className={`${styles.content} ${styles.first_content}`}>
                <div className={styles.first_column}>
                    <h2 className={`${styles.title} ${styles.title_primary}`}>Seja bem-vindo a Tree!</h2>
                    <p className={styles.description}>Caso você deseje criar uma conta pessoal</p>
                    <p className={styles.description}>por favor clique no botão abaixo</p>
                    <button onClick={() => handleSignInType('cpf')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa física</button>
                </div>
                <div className={styles.second_column}>
                    <h2 className={`${styles.title} ${styles.title_secondary}`}>Crie sua conta empresarial</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* Formulário Empresa */}
                        <label className={styles.label_input} htmlFor='nome_emp'>
                            <FaUsers className={styles.icon_modify}/>
                            <input
                                id='nome_emp'
                                type='text'
                                placeholder='Nome da empresa'
                                value={formData.nome_emp}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='CNPJ_emp'>
                            <IoDocument className={styles.icon_modify}/>
                            <input
                                id='CNPJ_emp'
                                type='number'
                                placeholder='CNPJ'
                                value={formData.CNPJ_emp}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='email_emp'>
                            <IoMail className={styles.icon_modify}/>
                            <input
                                id='email_emp'
                                type='email'
                                placeholder='E-mail'
                                value={formData.email_emp}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='contato_emp'>
                            <FaPhone className={styles.icon_modify}/>
                            <input
                                id='contato_emp'
                                type='tel'
                                placeholder='Contato'
                                value={formData.contato_emp}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='endereco_emp'>
                            <FaMapLocationDot className={styles.icon_modify}/>
                            <input
                                id='endereco_emp'
                                type='text'
                                placeholder='Endereço'
                                value={formData.endereco_emp}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='senha_emp'>
                            <FaLock className={styles.icon_modify}/>
                            <input
                                id='senha_emp'
                                type='password'
                                placeholder='Sua senha'
                                value={formData.senha_emp}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='confirmar_senha'>
                            <FaLock className={styles.icon_modify}/>
                            <input
                                id='confirmar_senha'
                                type='password'
                                placeholder='Confirme sua senha'
                               // value={formData.confirmar_senha}
                               // onChange={handleInputChange}
                                required
                            />
                        </label>

                        <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Cadastre-se</button>
                    </form>
                </div>
            </div>

            <div className={`${styles.content} ${styles.second_content}`}>
                <div className={styles.first_column}>
                    <h2 className={`${styles.title} ${styles.title_primary}`}>Seja bem-vindo!</h2>
                    <p className={styles.description}>Caso você deseje criar uma conta empresarial</p>
                    <p className={styles.description}>por favor clique no botão abaixo</p>
                    <button onClick={() => handleSignInType('cnpj')} className={`${styles.btn} ${styles.btn_primary}`}>Sou pessoa jurídica</button>
                </div>
                <div className={styles.second_column}>
                    <h2 className={`${styles.title} ${styles.title_secondary}`}>Crie sua conta pessoa física</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.label_input} htmlFor='nome'>
                            <FaUserTie className={styles.icon_modify}/>
                            <input
                                id='nome'
                                type='text'
                                placeholder='Seu nome'
                                value={formData.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='cpf'>
                            <IoDocument className={styles.icon_modify}/>
                            <input
                                id='cpf'
                                type='number'
                                placeholder='CPF'
                                value={formData.cpf}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='email'>
                            <IoMail className={styles.icon_modify}/>
                            <input
                                id='email'
                                type='email'
                                placeholder='E-mail'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='telefone'>
                            <FaPhone className={styles.icon_modify}/>
                            <input
                                id='telefone'
                                type='tel'
                                placeholder='Contato'
                                value={formData.telefone}
                                onChange={handleInputChange}
                                required
                            />
                        </label> 

                        <label className={styles.label_input} htmlFor='senha'>
                            <FaLock className={styles.icon_modify}/>
                            <input
                                id='senha'
                                type='password'
                                placeholder='Sua senha'
                                value={formData.senha}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label className={styles.label_input} htmlFor='confirm_senha'>
                            <FaLock className={styles.icon_modify}/>
                            <input
                                id='confirm_senha'
                                type='password'
                                placeholder='Confirme sua senha'
                                //value={formData.confirm_senha}
                                //onChange={handleInputChange}
                                required
                            />
                        </label>

                        <button type='submit' className={`${styles.btn} ${styles.btn_secondary}`}>Cadastre-se</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
