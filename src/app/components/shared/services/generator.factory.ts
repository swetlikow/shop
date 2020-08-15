import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GenerateToken = new InjectionToken<string>('GenerateToken');

export function GeneratorFactory(value: number): any {
    return (generatorService: GeneratorService): string =>
        generatorService.generate(value);
}
