listing('mrp');
function listing(discount) {
    const
        header = document.querySelector('.header'),
        aside = document.querySelector('.aside'),
        footerNav = document.querySelector('.footerNav')
        ;
    header.style.display = 'flex';
    aside.style.display = 'flex';
    footerNav.style.display = 'flex';


    const generateBtn = document.getElementById('generateBtn')
    generateBtn.innerHTML = `
                <div class="generate" onclick="generate('${discount}')">
                    <i class="fa-solid fa-check"></i>
                </div>
            `;
    const resultScreen = document.querySelector('.resultScreen');
    resultScreen.innerHTML = `
                <div>
                    <div>${findTotalVp()} vp</div>
                    <div id="totalPrice">₹${findTotalPrice(discount)}</div>
                    <div>${findTotalQty()}</div>
                </div>
            `;

    const tableContainer = document.querySelector('.tableContainer');
    tableContainer.innerHTML = `
                <!-- header of the list -->
                <div class="tableRow">
                    <div>Products</div>
                    <div>vp</div>
                    <div>Price</div>
                    <div>
                        <button>-</button>
                        <div>qty.</div>
                        <button>+</button>
                    </div>
                </div>
                <audio id="clickSound" src="../asset/sound/iphoneClickSound.mp3" preload="auto"></audio>
            `;
    for (let i = 0; i < productDetails.length; i++) {
        tableContainer.innerHTML += `
                    <div class="tableRow">
                        <div>${productDetails[i].name}</div>
                        <div>${productDetails[i].vp}</div>
                        <div>₹${productDetails[i][discount]}</div>
                        <div>
                            <button onclick="selectingProduct('remove', ${i}, '${discount}')" class="clickSound">-</button>
                            <div>${productDetails[i].qty}</div>
                            <button onclick="selectingProduct('add', ${i}, '${discount}')" class="clickSound">+</button>
                        </div>
                    </div>
                `;
    }

    const discountBtn = document.querySelectorAll('.discountBtn');
    discountBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            discountBtn.forEach((btn) => {
                btn.classList.remove("currentDiscount");
            });
            btn.classList.add("currentDiscount");
        });
    });

    const clickSound = document.querySelectorAll('.clickSound');
    clickSound.forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('clickSound').play()
        })
    })
}

function selectingProduct(action, index, discount) {
    if (action === 'add') {
        productDetails[index].qty++;
    } else if (action === 'remove' && productDetails[index].qty > 0) {
        productDetails[index].qty--;
    }
    listing(discount);
}

function findTotalVp() {
    let totalVp = 0;
    productDetails.forEach(item => {
        totalVp += ((item.vp * 100) * item.qty) / 100;
    });
    totalVp = Math.round(totalVp * 100) / 100;
    return totalVp;
}

function findTotalQty() {
    let totalQuantity = 0;
    productDetails.forEach(item => {
        totalQuantity += item.qty;
    });
    return totalQuantity;
}

function findTotalPrice(discount) {
    let totalPrice = 0;
    productDetails.forEach(item => {
        totalPrice += item[discount] * item.qty;
    });
    return totalPrice;
}

function clearAll() {
    productDetails.forEach(item => {
        item.qty = 0;
    })
    listing('mrp')
}

function generate(discount) {
    const
        header = document.querySelector('.header'),
        aside = document.querySelector('.aside'),
        footerNav = document.querySelector('.footerNav')
        ;
    header.style.display = 'none';
    aside.style.display = 'none';
    footerNav.style.display = 'none';


    const main = document.querySelector('.main');
    main.innerHTML = `
                <section class="receiptHeader">
                    <h3>Pacify <span>Stay Calm</span></h3>
                </section>

                <section class="receiptDetailsSection">
                    <div class="receiptDetails">
                        <div class="dateInHead">
                            <p><b>Invoice : </b>6248788</p>
                            <p><b>Date : </b>12th - Dec - 2024</p>
                            <p><b>Time : </b>10:00 pm</p>
                            <p><b>Remark : </b></p>
                            <input type="text">
                        </div>
                        <div class="totalsInHead">
                            <p>Amount</p>
                            <h4>₹ ${findTotalPrice(discount)}/-</h4>

                            <p>Volume</p>
                            <h4>${findTotalVp()}</h4>

                            <p>Quantity</p>
                            <h4>${findTotalQty()}</h4>
                        </div>
                    </div>
                </section>
                <div class="receiptPage">
                    <table>
                        <thead>
                            <tr>
                                <td>Products</td>
                                <td>Unit Price</td>
                                <td>Qty</td>
                                <td>Line Total</td>
                            </tr>
                        </thead>
                        <tbody id='tbody'>
                            
                        </tbody>
                    </table>
                    <div class="totalsTableBottom">
                        <p>Total vp: ${findTotalVp()}</p>
                        <p>Total qty.: ${findTotalQty()}</p>
                        <div>
                            <p>₹${findTotalPrice(discount)}/-</p>
                        </div>
                    </div>
                </div>

                <section class="shareDownload">
                    <button>
                        <span><i class="fa-solid fa-share-nodes"></i></span>
                        <span>Share</span>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-download"></i></span>
                        <span>Download</span>
                    </button>
                </section>

                <section class="receiptPageFooter">

                </section>
                
                <div class="saveOrAddMore">
                    <button onclick="addMoreItem()">
                        <span><i class="fa-solid fa-basket-shopping"></i></span>
                        <span>Add More Item</span>
                    </button>
                    <button onclick="save('mrp')">
                        <span><i class="fa-regular fa-bookmark"></i></span>
                        <span>Save</span>
                    </button>
                </div>
            `;

    const tbody = document.getElementById('tbody');
    for (let i = 0; i < productDetails.length; i++) {
        if (productDetails[i].qty > 0) {
            tbody.innerHTML += `
                        <tr>
                            <td>${productDetails[i].name}</td>
                            <td class="unitPriceLineTotal">₹${productDetails[i][discount]}</td>
                            <td>${productDetails[i].qty}</td>
                            <td  class="unitPriceLineTotal">₹${productDetails[i][discount] * productDetails[i].qty}</td>
                        </tr>
                    `;
        }
    }
}

function addMoreItem() {
    const main = document.querySelector('.main');
    main.innerHTML = `
                <section class="calcHeaderSection">
                    <div>
                        <div class="discount">
                            <p>Discount</p>
                            <button class="discountBtn currentDiscount" onclick="listing('mrp')">MRP</button>
                            <button class="discountBtn" onclick="listing('d25')">25%</button>
                            <button class="discountBtn" onclick="listing('d35')">35%</button>
                            <button class="discountBtn" onclick="listing('d42')">42%</button>
                            <button class="discountBtn" onclick="listing('d50')">50%</button>
                        </div>
                    </div>
                </section>
                
                <section class="resultScreen">
                    <div>
                        <div>${findTotalVp()} vp</div>
                        <div id="totalPrice">₹0</div>
                        <div>${findTotalQty()}</div>
                    </div>
                </section>

                <section class="tableSection">
                    <div class="tableContainer">
                        
                    </div>
                </section>


                <div class="clear" onclick="clearAll()">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
                <div id="generateBtn">

                </div>   
            `;
    listing('mrp');
}


function save(discount) {
    const invoice = []
    productDetails.forEach(item => {
        if (item.qty > 0) {
            invoice.push({
                "id": item.id,
                "name": item.name,
                "vp": item.vp,
                "price": item[discount],
                "qty": item.qty,
                "discount": discount
            });
        }
    });
    console.log(invoice);

}
