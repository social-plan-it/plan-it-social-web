import { Button } from '~/components/ui/button';

export default function AboutUs() {
  return (
    <>
      <h1 className="text-2xl my-5">The About Page For Social Plan-it</h1>
      <Button variant="primary" buttonStyle="rounded" size="large">
        First
      </Button>
      <Button variant="secondary" buttonStyle="fullyRounded" size="medium">
        Second
      </Button>
      <Button variant="outlined" buttonStyle="rounded" size="small">
        Third
      </Button>
      <Button variant="warm" buttonStyle="fullyRounded" size="large">
        Fourth
      </Button>
    </>
  );
}
