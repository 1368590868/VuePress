# react路由使用
```jsx
function ContentText(props) {
  return (
    <>
      <Title>hello yemian</Title>
      <BrowserRouter>
        <Routes>
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
            <Route path="sent" element={<SentInvoices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
```
配置路由
> "/invoices"
"/invoices/sent"
"/invoices/:invoiceId"

嵌套路由需要在添加子路由显示`<Outlet />`与Vue的`<Router-View>`相同