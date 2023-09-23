// Test case: Successful fetch
test('fetchUser - Successful fetch', async () => {
  // Mock the fetch function to return a successful response
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({ name: 'John Doe' }),
  });

  // Call the fetchUser function
  await fetchUser();

  // Assert that the user state is updated correctly
  expect(setUser).toHaveBeenCalledWith({ name: 'John Doe' });
  expect(setIsError).not.toHaveBeenCalled();
  expect(setIsLoading).toHaveBeenCalledWith(false);
});

// Test case: Failed fetch
test('fetchUser - Failed fetch', async () => {
  // Mock the fetch function to return an error response
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: false,
  });

  // Call the fetchUser function
  await fetchUser();

  // Assert that the error state is updated correctly
  expect(setIsError).toHaveBeenCalledWith(true);
  expect(setUser).not.toHaveBeenCalled();
  expect(setIsLoading).toHaveBeenCalledWith(false);
});

// Test case: Error thrown
test('fetchUser - Error thrown', async () => {
  // Mock the fetch function to throw an error
  jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));

  // Call the fetchUser function
  await fetchUser();

  // Assert that the error state is updated correctly
  expect(setIsError).toHaveBeenCalledWith(true);
  expect(setUser).not.toHaveBeenCalled();
  expect(setIsLoading).toHaveBeenCalledWith(false);
});