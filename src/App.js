function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/users/sign_in' element={<Forms isSignIn={true} />} />
      <Route path='/users/sign_up' element={<Forms isSignIn={false} />} />
    </Routes>
  );
}
