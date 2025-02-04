const tabMenus = `
      <div>
        <h1>🥤자판기🥤</h1>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu" >잔돈 충전</button>
        <button id="product-purchase-menu" style=>상품 구매</button>
      </div>
      <div id="tab"></div>
`;

const tab1 = `
<div class="tab1">
    <h2>상품 추가하기</h2>
    <form>
        <input type="text" id="product-name-input" placeholder="상품명" />
        <input type="number" id="product-price-input" placeholder="가격" />
        <input type="number" id="product-quantity-input" placeholder="수량"
        />
        <input type="submit" id="product-add-button" value="추가하기"></input>
    </form>
    <h2>상품 현황</h2>
    <table>
        <thead>
            <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
            </tr>
        </thead>
        <tbody id="tbodyOfTab1"></tbody>
    </table>
</div>
`;

const tab2 = `
<div class="tab2">
    <h2>자판기 동전 충전하기</h2>
    <form>
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액"
        />
        <input type="submit" id="vending-machine-charge-button" value="충전하기"></input>
    </form>
    <br>
    <p>보유 금액: 
    <span id="vending-machine-charge-amount">0</span>원
    </p>
    <h2>자판기가 보유한 동전</h2>
    <table>
        <thead>
            <tr>
                <th>동전</th>
                <th>개수</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>500원</th>
                <td id="vending-machine-coin-500-quantity"></td>
            </tr>
            <tr>
                <th>100원</th>
                <td id="vending-machine-coin-100-quantity"></td>
            </tr>
            <tr>
                <th>50원</th>
                <td id="vending-machine-coin-50-quantity"></td>
            </tr>
            <tr>
                <th>10원</th>
                <td id="vending-machine-coin-10-quantity"></td>
            </tr>
        </tbody>
        <tbody id="tbodyOfTab1"></tbody>
    </table>
</div>
`;

const tab3 = `
<div class="tab3">
    <h2>금액 투입</h2>
    <form>
        <input type="number" id="charge-input" placeholder="투입할 금액"
        />
        <input type="submit" id="charge-button" value="투입하기"></input>
    </form>
    <br>
    <p>투입한 금액: 
    <span id="charge-amount">0</span>원
    </p>
    <h2>구매할 수 있는 상품 현황</h2>
    <table>
        <thead>
            <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
                <th>구매</th>
            </tr>
        </thead>
        <tbody id="tbodyOfTab3"></tbody>
    </table>

    <h2>잔돈</h2>
    <button id="coin-return-button">반환하기</button>
    <table>
        <thead>
            <tr>
                <th>동전</th>
                <th>개수</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>500원</th>
                <td id="coin-500-quantity"></td>
            </tr>
            <tr>
                <th>100원</th>
                <td id="coin-100-quantity"></td>
            </tr>
            <tr>
                <th>50원</th>
                <td id="coin-50-quantity"></td>
            </tr>
            <tr>
                <th>10원</th>
                <td id="coin-10-quantity"></td>
            </tr>
        </tbody>
        <tbody id="tbodyOfTab1"></tbody>
    </table>
</div>
`;

const productNameInput = () =>
  document.getElementById('product-name-input').value;

const productPriceInput = () =>
  parseInt(document.getElementById('product-price-input').value, 10);

const productQuantityInput = () =>
  parseInt(document.getElementById('product-quantity-input').value, 10);

const tbodyOfTab1 = () => document.getElementById('tbodyOfTab1');

const createTbodyOfTab1 = (name, price, quantity) => `
  <tr class='product-manage-item'>
    <td class='product-manage-name'>${name}</td>
    <td class='product-manage-price'>${price}</td>
    <td class='product-manage-quantity'>${quantity}</td>
  </tr>
`;

const newRowOfTab1 = () =>
  createTbodyOfTab1(
    productNameInput().value,
    productPriceInput().value,
    productQuantityInput().value
  );

const chargedMoney = () =>
  parseInt(document.getElementById('vending-machine-charge-input').value, 10);

const vendingMachineCoin500 = () =>
  document.getElementById('vending-machine-coin-500-quantity');

const vendingMachineCoin100 = () =>
  document.getElementById('vending-machine-coin-100-quantity');

const vendingMachineCoin50 = () =>
  document.getElementById('vending-machine-coin-50-quantity');

const vendingMachineCoin10 = () =>
  document.getElementById('vending-machine-coin-10-quantity');

const vendingMachineChargeAmount = () =>
  document.getElementById('vending-machine-charge-amount');

const insertedMoney = () =>
  parseInt(document.getElementById('charge-input').value, 10);

const insertedAmount = () => document.getElementById('charge-amount');

const tbodyOfTab3 = () => document.getElementById('tbodyOfTab3');

const createTbodyOfTab3 = (name, price, quantity) => `
  <tr class='product-purchase-item'>
    <td class='product-purchase-name' data-product-name='${name}'>${name}</td>
    <td class='product-purchase-price' data-product-price='${price}'>${price}</td>
    <td class='product-purchase-quantity' data-product-quantity='${quantity}'>${quantity}</td>
    <td><button class="purchase-button">구매하기</button></td>
  </tr>
`;

const coin500quality = () => document.getElementById('coin-500-quantity');
const coin100quality = () => document.getElementById('coin-100-quantity');
const coin50quality = () => document.getElementById('coin-50-quantity');
const coin10quality = () => document.getElementById('coin-10-quantity');

export {
  tabMenus,
  tab1,
  tab2,
  tab3,
  tbodyOfTab1,
  newRowOfTab1,
  createTbodyOfTab1,
  productNameInput,
  productPriceInput,
  productQuantityInput,
  chargedMoney,
  vendingMachineCoin500,
  vendingMachineCoin100,
  vendingMachineCoin50,
  vendingMachineCoin10,
  vendingMachineChargeAmount,
  insertedMoney,
  insertedAmount,
  tbodyOfTab3,
  createTbodyOfTab3,
  coin500quality,
  coin100quality,
  coin50quality,
  coin10quality,
};
