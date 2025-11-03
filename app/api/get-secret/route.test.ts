// app/api/get-secret/route.test.ts
import { GET } from './route';
import { NextResponse } from 'next/server';

describe('GET /api/get-secret', () => {
  it('returns the secret value from environment variable', async () => {
    // Arrange
    const expectedSecret = 'my-secret-value';
    process.env.MIN_TEST_VARIABEL = expectedSecret;

    // Act
    const response = await GET();
    const body = await response.json();

    // Assert
    expect(response.status).toBe(200);
    expect(body.secret).toBe(expectedSecret);
  });

  it('returns a fallback value when environment variable is not set', async () => {
    // Arrange
    delete process.env.MIN_TEST_VARIABEL;

    // Act
    const response = await GET();
    const body = await response.json();

    // Assert
    expect(response.status).toBe(200);
    expect(body.secret).toBe('### VARIABEL MANGLER (undefined) ###');
  });
});
