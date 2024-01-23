import { Button } from '~/components/ui/button';

export default function AboutUs() {
  return (
    <>
      <h1 className="text-2xl my-5">The About Page For Social Plan-it</h1>
      <Button variant="primary" buttonStyle="rounded" size="medium">
        Primary Rounded Medium
      </Button>
      <Button variant="secondary" buttonStyle="fullyRounded" size="small">
        Secondary Fully Rounded Small
      </Button>
      <Button variant="warm" buttonStyle="rounded" size="large">
        Warm Rounded Large
      </Button>
      <Button variant="outlined" buttonStyle="fullyRounded" size="medium">
        Outlined Fully Rounded Medium
      </Button>
    </>
  );
}
