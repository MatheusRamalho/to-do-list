import { useState } from 'react';

// Components...
import { List, ListItem } from './components/Item';
import { AddItem } from './components/AddItem';

// Styles...
import GlobalStyle from './styles/global';
import { Container, Wrapper, Header } from './App.styles';

// Types...
import { ItemType } from './Types/Item';


function App() {
	const [list, setList] = useState<ItemType[]>([
		{ id: 1, name: 'Aprendendo ReactJS', done: false }
	]);

	// Function handleAddTask
	// Recebe uma string 
	// A adiciona um novo item na lista...
	const handleAddTask = (taskName: string) => {
		let newList = [...list]; // clonando a lista...

		newList.push({ // Adiciona item...
			id: list.length + 1, // Pega o tamanho da lista e soma mais um...
			name: taskName, // Recebe o valor do parametro...
			done: false, // Todo item novo inicia como falso...
		});

		setList(newList); // Adiciona a lista original...
	}

	return (
		<Container>
			<GlobalStyle />
			
			<Wrapper>
				<Header> To-do List </Header>
				
				{/* Adiciona um novo item... */}
				{/* Passando a funcao como prop para o component... */}
				<AddItem onEnter={handleAddTask} />

				{/* Lista todos os itens adicionados... */}
				<List>
					{list.map((item, index) => (
						<ListItem key={index} item={item}/>
					))}
				</List>
			</Wrapper>
		</Container>
	);
}

export default App;