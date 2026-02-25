import React from "react";
import Layout from "./components/Layout/Layout";
import Burger from "./components/Burger/Burger";
import BuildControls from "./components/BuildControls/BuildControls";
import Modal from "./components/UI/Modal/Modal";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import styles from "./App.module.css";

const INGREDIENT_PRICES = {
  salad: 5000,
  bacon: 7000,
  cheese: 6000,
  meat: 10000,
};

const INGREDIENT_LABELS = {
  salad: "Salad",
  bacon: "Bacon",
  cheese: "Cheese",
  meat: "Meat",
};

class App extends React.Component {
  state = {
    ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
    totalPrice: 0,
    purchasing: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients, [type]: updatedCount };
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients, [type]: updatedCount };
    const newPrice = Math.max(0, this.state.totalPrice - INGREDIENT_PRICES[type]);
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // in real app: send order to backend
    alert("Buyurtma qabul qilindi ✅");
    this.setState({
      ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
      totalPrice: 0,
      purchasing: false,
    });
  };

  render() {
    const disabledLess = {};
    Object.keys(this.state.ingredients).forEach((key) => {
      disabledLess[key] = this.state.ingredients[key] <= 0;
    });

    const totalCount = Object.values(this.state.ingredients).reduce((a, b) => a + b, 0);

    return (
      <Layout>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            labels={INGREDIENT_LABELS}
            price={this.state.totalPrice}
            onCancel={this.purchaseCancelHandler}
            onContinue={this.purchaseContinueHandler}
          />
        </Modal>

        <div className={styles.Grid}>
          <section className={styles.Left}>
            <Burger ingredients={this.state.ingredients} />
            <div className={styles.Hint}>
              {totalCount === 0 ? "Iltimos Burgeringizni qurish uchun tanlang" : "Ajoyib burger bo'ldi bratishka 😂"}
            </div>
          </section>

          <aside className={styles.Right}>
            <div className={styles.Card}>
              <div className={styles.PriceRow}>
                <div>
                  <div className={styles.PriceLabel}>Total Price</div>
                  <div className={styles.Price}>{this.state.totalPrice.toLocaleString()} so‘m</div>
                </div>
                <div className={styles.Badge}>{totalCount} Mahsulot</div>
              </div>

              <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                ingredients={this.state.ingredients}
                labels={INGREDIENT_LABELS}
                disabledLess={disabledLess}
              />

              <button
                className={styles.OrderBtn}
                onClick={this.purchaseHandler}
                disabled={totalCount === 0}
                type="button"
              >
                Bo'ldi sotib olaman
              </button>

              {totalCount === 0 && <div className={styles.Note}>Sotib olishdan oldin biror nimani qo'shing!</div>}
            </div>
          </aside>
        </div>
      </Layout>
    );
  }
}

export default App;
