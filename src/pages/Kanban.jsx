import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import useBoard from "../contexts/Board";
import "./styles/Board.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import AddCardModal from "../components/AddCardModal/AddCardModal";
import { useState } from "react";
import { Header } from "../components";

const Kanban = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    const updatedBoard = moveColumn(board, source, destination);
    setBoard(updatedBoard);
  };

  const handleCardMove = (_card, source, destination) => {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  };

  const getColumn = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );

    return column[0];
  };

  const getGradient = (card) => {
    const column = getColumn(card);
    const title = column.title;
    if (title === "TODO") {
      return {
        background: "rgba(145, 133, 223, 0.7)",
        color: "white",
      };
    } else if (title === "Doing") {
      return {
        background: "rgba(35, 169, 242, 0.7)",
        color: "white",
      };
    } else if (title === "Completed") {
      return {
        background: "rgba(28, 209, 80, 0.7)",
        color: "white",
      };
    } else if (title === "Backlog") {
      return {
        background: "rgba(231, 65, 52, 0.7)",
        color: "white",
      };
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Kanban" />

      <div className="board-container">
        <Board
          allowAddColumn
          allowRenameColumn
          allowRemoveCard
          onCardDragEnd={handleCardMove}
          onColumnDragEnd={handleColumnMove}
          renderCard={(props) => (
            <div className="kanban-card" style={getGradient(props)}>
              <div>
                <span>{props.title}</span>
                
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => {
                    const updatedBoard = removeCard(
                      board,
                      getColumn(props),
                      props
                    );
                    setBoard(updatedBoard);
                  }}
                >
                  <RxCross2 color="white" size={15} />

                </button>
              </div>

              <span>{props.description}</span>
            </div>
          )}
          renderColumnHeader={(props) => {
            const handleCardAdd = (title, detail) => {
              const card = {
                id: new Date().getTime(),
                title,
                description: detail,
              };

              const updatedBoard = addCard(board, props, card);
              setBoard(updatedBoard);
              setModalOpened(false);
            };

            return (
              <div className="column-header">
                <span>{props.title}</span>

                <IoMdAdd
                  color="#9185DF"
                  size={25}
                  title="Add card"
                  onClick={() => setModalOpened(true)}
                />

                <AddCardModal
                  visible={modalOpened}
                  handleCardAdd={handleCardAdd}
                  onClose={() => setModalOpened(false)}
                />
              </div>
            );
          }}
        >
          
          {board}
        </Board>
      </div>
    </div>
  );
};

export default Kanban;
